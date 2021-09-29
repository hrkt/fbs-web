import { mount } from '@vue/test-utils'
import CodeEditor from '@/components/CodeEditor.vue'

describe('CodeEditor', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(CodeEditor)
    expect(wrapper.vm).toBeTruthy()
  })
})
