<template>
  <BaseInput 
    v-model="event.title" 
    label="My input Title" 
    type="text" 
  />

  <BaseSelect
    :options="categories"
    v-model="event.category"
    label="Select a category"
  />

  <BaseCheckbox
    v-model="event.extras.music"
    label="Extras"
  />

  <BaseRadioGroup 
    v-model="event.pets"
    name="pets"
    :options="petOptions"
  />

</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BaseInput from "@/components/BaseInput.vue"
import BaseSelect from '@/components/BaseSelect.vue'
import BaseCheckbox from '@/components/BaseCheckbox.vue'
import BaseRadio from '@/components/BaseRadio.vue'
import BaseRadioGroup from '@/components/BaseRadioGroup.vue'

export default defineComponent({
 data () {
    return {
      categories: [
        'sustainability',
        'nature',
        'animal welfare',
        'housing',
        'education',
        'food',
        'community'
      ],
      event: {
        category: '',
        title: '',
        description: '',
        location: '',
        pets: 1,
        extras: {
          catering: false,
          music: false
        }
      },
      petOptions: [
        {label: 'Yes', value: 1},
        {label: 'No', value: 0}
      ]
    }
  },
  components: {
    BaseInput,
    BaseSelect,
    BaseCheckbox,
    BaseRadio,
    BaseRadioGroup
  }  
})
</script>