<template>
  <h1>Hello App!</h1>
  <p><strong>Current route path:</strong> {{ $route.fullPath }}</p>
  <nav style="display: flex; gap: 1rem; margin-bottom: 1rem;">
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/123">Go to /123</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
</template>
