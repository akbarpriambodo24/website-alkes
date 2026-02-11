# Perbaikan Halaman Produk dan Prisma

## Problem yang Terjadi

### 1. Halaman Produk Error
**Error**: Halaman `/products` tidak bisa diakses dan menampilkan error 500

### 2. `npx prisma generate` Tidak Bisa Dijalankan
**Error**:
```
Error: Prisma schema validation - (get-config wasm)
Error code: P1012
error: The datasource property `url` is no longer supported in schema files.
```

**Error kedua**:
```
Error: Using engine type "client" requires either "adapter" or "accelerateUrl"
to be provided to PrismaClient constructor.
```

---

## Root Cause

### Prisma v7 Breaking Changes
Prisma v7 memiliki perubahan besar dalam cara konfigurasi:

1. **Schema File Changes**:
   - `url` di `datasource db` tidak lagi diizinkan di `schema.prisma`
   - Connection URL harus di `prisma.config.ts` atau `.env`

2. **Client Constructor Changes**:
   - PrismaClient sekarang **wajib** menggunakan `adapter` untuk SQLite
   - Tidak bisa langsung connect tanpa adapter

---

## Solusi yang Diterapkan

### 1. Fix `schema.prisma`
**File**: `/Users/demo/Desktop/website-alkes/prisma/schema.prisma`

**Before**:
```prisma
datasource db {
  provider = "sqlite"
  url      = "file:./dev.db"  // ❌ Tidak diizinkan di Prisma v7
}
```

**After**:
```prisma
datasource db {
  provider = "sqlite"
  // ✅ Tidak ada url di sini, pindah ke prisma.config.ts
}
```

---

### 2. Install Required Packages
```bash
npm install @prisma/client prisma --save
npm install @prisma/adapter-libsql
```

**Packages Installed**:
- `@prisma/client@7.3.0` - Prisma Client
- `prisma@7.3.0` - Prisma CLI
- `@prisma/adapter-libsql@7.3.0` - SQLite adapter untuk Prisma v7
- `@libsql/client@0.8.1` - LibSQL client (dependency)

---

### 3. Fix `prisma.ts`
**File**: `/Users/demo/Desktop/website-alkes/src/lib/prisma.ts`

**Before** (Broken):
```typescript
import { PrismaClient } from '@prisma/client';

// ❌ Error: Requires adapter
const prisma = new PrismaClient({
  log: ['query', 'error', 'warn'],
});
```

**After** (Fixed):
```typescript
import { PrismaClient } from '@prisma/client';
import { PrismaLibSql } from '@prisma/adapter-libsql';

declare global {
  var prisma: PrismaClient | undefined;
}

// Singleton Prisma Client
const prismaClientSingleton = () => {
  // ✅ Menggunakan adapter untuk SQLite
  const adapter = new PrismaLibSql({
    url: process.env.DATABASE_URL || 'file:./dev.db',
  });

  return new PrismaClient({
    adapter, // ✅ Adapter wajib di Prisma v7
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
};

const prisma = global.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') {
  global.prisma = prisma;
}

export default prisma;
```

**Key Changes**:
1. ✅ Import `PrismaLibSql` dari `@prisma/adapter-libsql`
2. ✅ Create adapter dengan URL dari environment variable
3. ✅ Pass adapter ke PrismaClient constructor
4. ✅ Singleton pattern untuk development (prevent multiple instances)

---

### 4. Environment Variables
**File**: `/Users/demo/Desktop/website-alkes/.env`

```env
DATABASE_URL="file:./dev.db"
```

**File**: `/Users/demo/Desktop/website-alkes/prisma.config.ts`

```typescript
import { defineConfig } from "@prisma/config";
import "dotenv/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
```

---

## Testing Results

### ✅ Prisma Generate Success
```bash
npx prisma generate
```

**Output**:
```
✔ Generated Prisma Client (v7.3.0) to ./node_modules/@prisma/client in 36ms
```

### ✅ Migration Check
```bash
npx prisma migrate dev
```

**Output**:
```
Already in sync, no schema change or pending migration was found.
```

### ✅ Products Page Works
**URL**: `http://localhost:3000/products`

**Dev Server Log**:
```
prisma:query SELECT `main`.`Product`.`id`, `main`.`Product`.`name`, ...
GET /products 200 in 852ms
```

**Status**: ✅ **200 OK** - Halaman berhasil dimuat!

---

## File Structure

```
website-alkes/
├── prisma/
│   ├── schema.prisma       # ✅ Fixed (no url)
│   ├── dev.db              # SQLite database
│   └── migrations/         # Migration history
├── prisma.config.ts        # ✅ Prisma v7 config
├── .env                    # ✅ DATABASE_URL
├── src/
│   ├── lib/
│   │   └── prisma.ts       # ✅ Fixed with adapter
│   └── app/
│       └── products/
│           └── page.tsx    # ✅ Working now
└── package.json
```

---

## Important Notes

### Prisma v7 Requirements
1. **Adapter is Required**: Untuk SQLite, harus gunakan `@prisma/adapter-libsql`
2. **No URL in Schema**: `url` tidak boleh di `schema.prisma`
3. **Config File**: Gunakan `prisma.config.ts` untuk datasource URL
4. **Environment Variables**: `DATABASE_URL` di `.env`

### Development vs Production
- **Development**: Logging enabled (`['query', 'error', 'warn']`)
- **Production**: Only error logging
- **Singleton Pattern**: Prevents multiple Prisma instances in development

### SQLite Specifics
- Database file: `./dev.db` (relative to project root)
- Adapter: `@prisma/adapter-libsql`
- No connection pooling needed for SQLite

---

## Common Commands

### Generate Prisma Client
```bash
npx prisma generate
```

### Create Migration
```bash
npx prisma migrate dev --name your_migration_name
```

### View Database
```bash
npx prisma studio
```

### Reset Database (Warning: Deletes all data)
```bash
npx prisma migrate reset
```

---

## Error Prevention

### ❌ Common Mistakes to Avoid

1. **Don't add `url` to schema.prisma**:
   ```prisma
   datasource db {
     provider = "sqlite"
     url      = "file:./dev.db"  // ❌ Don't do this in Prisma v7
   }
   ```

2. **Don't forget adapter**:
   ```typescript
   // ❌ Will error in Prisma v7
   const prisma = new PrismaClient();
   ```

3. **Don't use old adapters**:
   ```typescript
   // ❌ Old adapter (Prisma v5/v6)
   import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3';

   // ✅ Use new adapter (Prisma v7)
   import { PrismaLibSql } from '@prisma/adapter-libsql';
   ```

---

## Migration from Older Prisma Versions

If upgrading from Prisma v5 or v6:

### Step 1: Update Packages
```bash
npm install @prisma/client@latest prisma@latest
npm install @prisma/adapter-libsql
npm uninstall @prisma/adapter-better-sqlite3  # Remove old adapter
```

### Step 2: Update Schema
Remove `url` from `datasource db` in `schema.prisma`

### Step 3: Create `prisma.config.ts`
```typescript
import { defineConfig } from "@prisma/config";
import "dotenv/config";

export default defineConfig({
  datasource: {
    url: process.env.DATABASE_URL!,
  },
});
```

### Step 4: Update `prisma.ts`
Use new adapter as shown in solution above

### Step 5: Regenerate Client
```bash
npx prisma generate
```

---

## Summary

### ✅ Problems Fixed
1. ✅ Schema validation error - Removed `url` from schema.prisma
2. ✅ PrismaClient constructor error - Added adapter
3. ✅ Missing packages - Installed required adapters
4. ✅ Products page error - Now loading successfully
5. ✅ `npx prisma generate` working - Client generated successfully

### 📊 Status
- **Prisma Version**: 7.3.0
- **Products Page**: ✅ Working (200 OK)
- **Database**: ✅ Connected (SQLite)
- **Queries**: ✅ Executing successfully

### 🚀 Next Steps
You can now:
- Access products page: `http://localhost:3000/products`
- Add products to database
- Use Prisma Studio: `npx prisma studio`
- Create new migrations as needed

---

**Date**: 27 Januari 2026
**Status**: ✅ All Fixed and Working
