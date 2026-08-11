# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Project

Arcade Vault: plataforma para jugar online y competir por puntaje. El repo está en su estado inicial
(`create-next-app` sin modificar, salvo el README), así que la mayor parte del dominio —juegos,
puntajes, leaderboard, usuarios— todavía no existe y hay que diseñarlo.

El idioma de trabajo con el usuario es español.

## Commands

```bash
npm run dev     # servidor de desarrollo
npm run build   # build de producción
npm start       # sirve el build
npm run lint    # eslint (flat config, sin argumentos: recorre el proyecto)
npx tsc --noEmit  # typecheck; el build no es el único chequeo de tipos disponible
```
## SKILLS
Usa From Design para diseñar la interfaz de usuario.



No hay framework de tests configurado. Si se agrega uno, documentar aquí el comando para correr un
test individual.

## Stack y convenciones

- **Next.js 16.3.0 con App Router** (`app/`). Ver la nota de AGENTS.md: esta versión tiene cambios
  incompatibles con el conocimiento previo del modelo — consultar `node_modules/next/dist/docs/`
  (`01-app/` para App Router, `03-architecture/`) antes de escribir código de framework.
- **React 19.2.8**. Los componentes son Server Components por defecto; marcar `"use client"` solo
  donde haga falta interactividad (los juegos casi seguro la necesitan).
- **Tipos generados por Next**: `app/layout.tsx` usa `LayoutProps<"/">`, un tipo global que Next
  genera en `.next/types`. Usar los helpers `LayoutProps`/`PageProps` en lugar de tipar props a mano;
  requieren haber corrido `next dev` o `next build` al menos una vez.
- **Tailwind CSS v4** vía `@tailwindcss/postcss`. No hay `tailwind.config.js`: la configuración,
  el tema y los tokens viven en `app/globals.css` con `@import "tailwindcss"` y `@theme`.
- **TypeScript strict** con alias `@/*` apuntando a la raíz del repo.

## Flujo de trabajo

El README define Spec Driven Design con los comandos `/spec` y `/spec-impl` de
[Klerith/fernando-skills](https://github.com/Klerith/fernando-skills), instalables con
`npx skills@latest add Klerith/fernando-skills`. Esas skills **no están instaladas** en este entorno
todavía; si el usuario las invoca y no aparecen, sugerir ejecutar ese comando.

`AGENTS.md` es reescrito por `next dev` en cada arranque. Si aparece modificado en el diff, commitearlo
junto con el resto del trabajo en vez de revertirlo.

