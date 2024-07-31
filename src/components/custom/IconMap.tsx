import { computed, defineComponent, onMounted, ref } from 'vue';
// import icons from '@radix-icons/vue';

import * as IconLibrary from '@radix-icons/vue';

const IconMap = defineComponent({
  name: 'IconMap',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  async setup(props, ctx) {
    //@ts-ignore
    return IconLibrary[props.name];
  },
});

// const IconMap: FunctionalComponent<{ name: string }> = async (props) => {
//   console.log('props :>> ', props);
//   console.log(props.name);
//   const path = `@radix-icons/vue/${props.name}Icon`;
//   const icon = await import(path);
//   console.log('icon :>> ', icon);

//   return <DashboardIcon />;
// };
export default IconMap;
