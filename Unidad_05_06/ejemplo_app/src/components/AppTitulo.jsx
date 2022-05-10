import { defineComponent } from "vue";

const AppTitulo = defineComponent({
  setup() {
    return () => (
      <>
        <h1>Ejemplo de aplicación de Vue</h1>
        <h2> Este contenido es generado a travez de JSX</h2>
      </>
    );
  },
});

export default AppTitulo;