<script setup lang="ts">
import AccordionMenu from '@/components/custom/AccordionMenu.vue';
import MenuSheet from '@/components/custom/MenuSheet.vue';
import { Accordion } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="flex flex-col w-screen min-h-screen">
    <header
      class="flex items-center space-x-10 justify-between h-14 border-b border-border sticky z-40 top-0 bg-background/80 backdrop-blur-lg px-4"
    >
      <div
        class="min-w-[200px] scroll-m-20 text-2xl font-semibold tracking-tight cursor-pointer transition-transform capitalize flex space-x-2 items-center"
      >
        <div class="size-8 flex items-center lg:hidden">
          <!-- <DropdownMenuIcon class="size-5" /> -->
          <MenuSheet />
        </div>
        <div>logo</div>
      </div>
      <div class="hidden sm:block flex-1"></div>
      <div>avatar</div>
    </header>
    <div class="flex-1 grid sm:grid-cols-[240px_1fr]">
      <nav class="overflow-hidden h-[calc(100vh-56px)] hidden lg:block border-r border-border">
        <ScrollArea class="h-full w-full px-3 py-2">
          <AccordionMenu />
        </ScrollArea>
      </nav>
      <main>
        <RouterView />
      </main>
    </div>
  </div>
</template>

<style scoped></style>
