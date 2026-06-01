<script lang="ts">
    import {type SvelteWrapperProps} from "@visuallyjs/browser-ui-svelte";
    const {
        data, model, vertex
    }:SvelteWrapperProps = $props()
</script>

<div class="vjs-chatbot-message" data-vjs-target="true">
  <div class="vjs-delete" onclick={() => model.removeNode(vertex.id)}></div>
  {data.message}
  <div class="vjs-chatbot-connect" data-vjs-source="true"></div>
</div>
