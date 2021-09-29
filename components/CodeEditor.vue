<template>
  <div ref="codeEditor" class="code-editor"></div>
</template>

<style scoped>
.code-editor {
  position: relative !important;
  border: 1px solid lightgray;
  margin: auto;
  height: 100%;
  width: 100%;
}
</style>

<script>
import ace from 'ace-builds'
import 'ace-builds/webpack-resolver'
import 'ace-builds/src-noconflict/mode-scheme'
import 'ace-builds/src-noconflict/theme-github'

export default {
  props: {
    content: String,
  },
  data() {
    return {
      editor: Object,
    }
  },
  mounted() {
    this.editor = ace.edit(this.$refs.codeEditor)
    this.editor.session.setMode('ace/mode/scheme')
    this.editor.setTheme('ace/theme/monokai')
    if (this.content) {
      this.editor.session.setValue(this.content)
    }
    this.editor.on('change', () => {
      // this.$emit('content-changed', this.editor.getValue())
      this.data = this.editor.getValue()
    })
  },
  methods: {
    updateContent(data) {
      this.editor.session.setValue(data)
    },
    getContent() {
      return this.editor.getValue()
    },
  },
}
</script>
