Premium modal/drawer: blurred backdrop, rise-in, Esc + click-out close, focus trap; becomes a bottom sheet under 640px.
```jsx
<Dialog open={open} onClose={()=>setOpen(false)} title="Solicitar propuesta" size="md">…</Dialog>
```
Without `title` children render edge-to-edge (for image-led case studies).