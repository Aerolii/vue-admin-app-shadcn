<script setup lang="ts">
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

import * as IconLibrary from '@radix-icons/vue';

import { buttonVariants } from '../ui/button';
import { RouterLink, useLink, useRoute } from 'vue-router';
import { cn } from '@/lib/utils';
import { adminRoutes } from '@/router';
import { computed, defineAsyncComponent } from 'vue';
import IconMap from './IconMap';

const route = useRoute();
console.log('route :>> ', route);
const defaultValue = computed(() => {
  const name = route.name as string;
  return name.includes('-') ? [name.split('-')[0]] : [];
});
</script>

<template>
  <Accordion class="w-full" collapsible type="multiple" :default-value="defaultValue">
    <template v-for="item in adminRoutes" :key="item.name">
      <AccordionItem v-if="item.children" :value="item.name" class="border-none">
        <AccordionTrigger
          :class="cn(buttonVariants({ variant: 'ghost' }), 'flex justify-between px-4')"
        >
          <div class="flex space-x-2 items-center">
            <IconMap name="DashboardIcon" />

            <span>
              {{ item.meta.title }}
            </span>
          </div>
        </AccordionTrigger>
        <AccordionContent class="flex flex-col py-1 gap-1 pl-3 justify-end">
          <RouterLink
            v-for="route in item.children"
            :key="route.name"
            :to="item.path + (route.path ? '/' + route.path : '')"
            :class="
              cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full flex justify-start hover:bg-primary/90  hover:text-primary-foreground transition-all duration-300'
              )
            "
            active-class="bg-primary text-primary-foreground"
            exact-active-class="bg-primary text-primary-foreground"
          >
            {{ route.meta.title }}
          </RouterLink>
        </AccordionContent>
      </AccordionItem>
    </template>
    <RouterLink
      to="/"
      :class="
        cn(
          buttonVariants({ variant: 'ghost' }),
          'w-full flex justify-start hover:bg-primary/90  hover:text-primary-foreground transition-all duration-150'
        )
      "
      active-class="bg-primary text-primary-foreground"
      exact-active-class="bg-primary text-primary-foreground"
    >
      {{ route.meta.title }}
    </RouterLink>

    <template v-for="item in adminRoutes" :key="item.name">
      <AccordionItem v-if="item.children" :value="item.name + 1" class="border-none">
        <AccordionTrigger
          :class="cn(buttonVariants({ variant: 'ghost' }), 'flex justify-between px-4')"
        >
          {{ item.meta.title }}
        </AccordionTrigger>
        <AccordionContent class="flex flex-col py-1 gap-1 pl-3 justify-end">
          <RouterLink
            v-for="route in item.children"
            :key="route.name"
            :to="item.path + (route.path ? '/' + route.path : '')"
            :class="
              cn(
                buttonVariants({ variant: 'ghost' }),
                'w-full flex justify-start hover:bg-primary/90  hover:text-primary-foreground'
              )
            "
            active-class="bg-primary text-primary-foreground"
            exact-active-class="bg-primary text-primary-foreground"
          >
            {{ route.meta.title }}
          </RouterLink>
        </AccordionContent>
      </AccordionItem>
    </template>
  </Accordion>
</template>
