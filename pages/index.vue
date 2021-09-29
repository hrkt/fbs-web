<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <v-card>
        <v-card-title class="headline">
          Welcome to my "FizzBuzz Scheme" testing site
        </v-card-title>
        <v-card-text>
          <p>
            FizzBuzz Scheme is a tiny scheme subset interpreter that can
            evaluate fizz-buzz code.
          </p>
          <p>
            LIMITATION: FizzBuzz Scheme is under construction, so few procedures are executable now.
            Port-related procedures (such as display, write, load, ... are not enabled in this site),
            last evaluated value is shown in the result area.
          </p>
          <p>
            For more information on FizzBuzz Scheme, check out it on
            <a
              href="https://github.com/hrkt/fizzbuzz-scheme/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub </a
            >.
            For more information on the code of this site, check out it on
            <a
              href="https://github.com/hrkt/fbs-web/"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub </a
            >.
          </p>
          <v-select
            :items="items"
            label="Load sample"
            v-on:input="onChangeSample"
          ></v-select>
          <v-card class="logo py-4 d-flex justify-center" style="height: 280px">
            <CodeEditor ref="codeEditor"></CodeEditor>
          </v-card>
          <v-card-actions>
            <v-spacer />
            <v-btn v-on:click="evalCode" color="primary" nuxt>
              eval code
            </v-btn>
          </v-card-actions>
          <v-card class="logo py-4 d-flex justify-center">
            <v-textarea solo name="result-area" rows="2" v-model="evalResult">
            </v-textarea>
          </v-card>
          <br />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
import * as FBS from '/assets/js/fbs.bundle.js'
import { Sample } from '/assets/js/sample-code.js'
import CodeEditor from '../components/CodeEditor.vue'
export default {
  data: () => {
    return {
      evalResult: '',
      items: ['FizzBuzz', 'Fibonacci'],
    }
  },
  components: {
    CodeEditor,
  },
  methods: {
    evalCode: function (message) {
      const fbs = new FBS.FizzBuzzScheme()
      try {
        const code = this.$refs.codeEditor.getContent()
        this.evalResult = fbs.eval(code)
      } catch(e) {
        this.evalResult = 'ERROR: ' + e.toString()
      }
    },
    onChangeSample(name) {
      switch (name) {
        case 'FizzBuzz':
          this.$refs.codeEditor.updateContent(Sample.FIZZ_BUZZ)
          break
        case 'Fibonacci':
          this.$refs.codeEditor.updateContent(Sample.FIBONACCI)
          break
        default:
          this.$refs.codeEditor.updateContent('')
          break
      }
      this.evalResult = ''
    },
  },
  mounted() {
    this.onChangeSample('FizzBuzz')
  }
}
</script>
