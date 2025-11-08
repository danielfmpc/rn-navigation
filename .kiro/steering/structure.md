---
inclusion: always
---

# Code Organization & Architecture

## Directory Structure

- `src/app/` - Screen components (Home.tsx, Product.tsx)
- `src/components/` - Reusable UI components with index.tsx pattern
- `src/routes/` - Navigation configuration and route type definitions
- `src/types/` - Shared TypeScript types
- `src/utils/` - Helper functions and utilities

## Import Rules

ALWAYS use `@/` path alias for src imports:
```typescript
import { ButtonIcon } from '@/components/ButtonIcon';
import { DrawerRoutesProps } from '@/routes/DrawerRoutes';
```

## Component Conventions

### Structure
- Components: `src/components/ComponentName/index.tsx` (PascalCase folder)
- Screens: `src/app/ScreenName.tsx` (PascalCase file)
- Use named exports, NOT default exports
- Colocate styles with components (inline or StyleSheet)

### Typing Pattern
Extend native React Native props with custom props:
```typescript
type Props = TouchableOpacityProps & {
  name: keyof typeof MaterialIcons.glyphMap;
};

export function ButtonIcon({ name, ...rest }: Props) {
  return <TouchableOpacity {...rest}>...</TouchableOpacity>;
}
```

### Navigation Types
Screens must use typed navigation props from route definitions:
- `DrawerRoutesProps<"home">` for drawer screens
- `StackRoutesProps<"product">` for stack screens

## Styling
- Inline styles for simple, component-specific styling
- Define styles as constants within components or directly in JSX
- Keep styles colocated with their components
