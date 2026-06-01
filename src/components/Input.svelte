<script lang="ts">
    import {type SvelteWrapperProps} from "@visuallyjs/browser-ui-svelte";

    const {data,model,vertex}:SvelteWrapperProps = $props()
</script>

<div class="vjs-chatbot-input" data-vjs-target="true">
  <div class="vjs-delete" onclick={() => model.removeNode(obj)}></div>
  {data.message}
  <textarea rows="5" cols="10" placeholder={data.prompt}></textarea>
  <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
</div>
