<script setup>
import IconAddItem from '@/assets/icons/IconAddItem.vue';
import IconLightMode from '@/assets/icons/IconLightMode.vue';
import IconDarkMode from '@/assets/icons/IconDarkMode.vue';
</script>

<template>
    <div class="container">
        <nav class="navbar">
            <h2 class="navbar-logo">Product Store</h2>
            <ul class="navbar__list">
                <li class="navbar__list-item">
                    <IconAddItem />
                </li>
                <li class="navbar__list-item">
                    <IconLightMode v-if="true" />
                    <IconDarkMode v-else />
                </li>
            </ul>
        </nav>
    </div>
</template>