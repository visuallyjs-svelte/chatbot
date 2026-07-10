<script>
    import {
        SurfaceProvider,
        SurfaceComponent,
        ControlsComponent,
        MiniviewComponent
    } from "@visuallyjs/browser-ui-svelte"

    import renderOptions from './render-options'
    import viewOptions from './view-options'
    import modelOptions from './model-options'
    import Palette from "./components/Palette.svelte";
    import Inspector from "./components/Inspector.svelte"

    const url = "/dataset.json";
</script>

<div class="vjs-chatbot">
    <SurfaceProvider>
        <div class="vjs-chatbot-canvas">
            <SurfaceComponent {renderOptions} {modelOptions} {url} {viewOptions}/>
            <ControlsComponent/>
            <MiniviewComponent typeFunction={(v) => v.type}/>
        </div>
        <div class="vjs-chatbot-rhs">
            <Palette/>
            <Inspector/>
        </div>
    </SurfaceProvider>
</div>
