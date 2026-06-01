### Summary
This demo shows a chatbot conversation flow builder. It allows users to design complex chatbot interactions using a node-based interface.

### Components Used
- `SurfaceProvider`: Context provider for the VisuallyJS surface.
- `SurfaceComponent`: The core canvas component for rendering the flow.
- `ControlsComponent`: UI for canvas interactions (zoom, etc.).
- `MiniviewComponent`: A thumbnail view for navigation.
- `PaletteComponent`: (In `components/Palette.svelte`) Used to drag new interaction nodes onto the canvas.
- `InspectorComponent`: (In `components/Inspector.svelte`) Used to edit the properties of selected conversation nodes.

### Component Options
#### `SurfaceComponent`
- `renderOptions`: Defines how the chatbot nodes and edges look.
- `modelOptions`: Configures the data model behavior.
- `viewOptions`: Configures the view behavior.
- `url`: Path to the initial chatbot flow data.

#### `MiniviewComponent`
- `typeFunction`: (v) => v.type. Used to determine the color/type of nodes in the miniview.

### Stylesheet Requirement
Ensure `visuallyjs.css` is included in your project.

```css
@import "@visuallyjs/browser-ui/css/visuallyjs.css";
```
