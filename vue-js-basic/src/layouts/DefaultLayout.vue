<template>
  <BNavbar v-b-color-mode="'dark'" toggleable="lg" variant="primary">
    <BNavbarBrand class="text-white fw-bold">Learn VueJs</BNavbarBrand>
    <BNavbarToggle target="nav-collapse" />
    <BCollapse id="nav-collapse" is-nav>
      <BNavbarNav>
        <BNavItem>
          <RouterLink to="/template-syntax" class="nav-link text-white">1.Template syntax</RouterLink>
        </BNavItem>
        <BNavItem>
          <RouterLink to="/ref-reactive" class="nav-link text-white">2.Ref Reactive</RouterLink>
        </BNavItem>
        <BNavItem>
          <RouterLink to="/events" class="nav-link text-white">2.Events</RouterLink>
        </BNavItem>
      </BNavbarNav>
    </BCollapse>
  </BNavbar>
  <div class="container">
    <slot />
  </div>
</template>

<script setup>
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-next/dist/bootstrap-vue-next.css';
import {
  BNavbar,
  BNavbarBrand,
  BNavbarToggle,
  BCollapse,
  BNavbarNav,
  BNav,
  BNavItem,
  BNavItemDropdown,
  BDropdownItem,
  BNavForm,
  BFormInput,
  BButton,
} from 'bootstrap-vue-next';
</script>

<style></style>