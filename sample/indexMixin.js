export default {
  props: {
    propObj: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      sum: 0,
    }
  },
  computed: {
    double() {
      return this.sum * 2
    },
  },
  mounted() {
    if (Math.round(Math.random()) % 2 === 0) this.sum = 100
  },
  methods: {
    plusOne() {
      this.sum++
    },
  },
}
