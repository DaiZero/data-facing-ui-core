<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BaseComponent',
  props: {
    compName: {
      type: String
    }
  },
  setup() {
    const init = (message: String) => {
      alert(message);
    };

    const compData="2222222222222222222222222"
    return {
      init,
      compData
    };
  },
});
</script>
