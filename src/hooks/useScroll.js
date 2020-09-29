import { ref, onMounted, onUnmounted } from 'vue'
import {useDebounce} from "./useDebounce";

export const useScroll = () => {
  const isAtTop = ref(true)
  
  onMounted(() => {
    window.addEventListener('scroll', debounceScroll)
  })
  
  onUnmounted(()=> {
    window.removeEventListener('scroll', debounceScroll)
  })
  
  const handleScroll = () => {
    isAtTop.value = window.scrollY < 30
  }
  const debounceScroll = useDebounce(handleScroll, 100)
  
  return { isAtTop }
  
}
