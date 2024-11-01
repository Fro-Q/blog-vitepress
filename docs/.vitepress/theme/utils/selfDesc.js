import { reactive } from "vue";

export const selfDesc = reactive({
  content: "",
  update: (content) => {
    selfDesc.content = content;
  },
});
