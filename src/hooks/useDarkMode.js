import { ref } from 'vue'
export const useDarkMode = ()=> {
    const darkMode = ref(false)
  
    const dark = ()=> {
      document.querySelector('body').classList.add('dark-mode')
      darkMode.value = true
      localStorage.setItem('darkMode', 'dark')
    }
  
    const light = ()=> {
      document.querySelector('body').classList.remove('dark-mode')
      darkMode.value = false
      localStorage.setItem('darkMode', 'light')
    }
  
    const toggleMode = () => {
      if(darkMode.value || document.querySelector('body').classList.contains('dark-mode')) {
        light()
      } else {
        dark()
      }
    }
    
    return { toggleMode, light, dark }
}
