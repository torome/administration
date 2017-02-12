<script>
  export default {
    props: {
      pageCount: {
        type: Number,
        required: true
      },
      clickHandler: {
        type: Function,
        default: () => {
        }
      },
      pageRange: {
        type: Number,
        default: 3
      },
      marginPages: {
        type: Number,
        default: 1
      },
      prevText: {
        type: String,
        default: 'Prev'
      },
      nextText: {
        type: String,
        default: 'Next'
      },
      containerClass: {
        type: String
      },
      pageClass: {
        type: String
      },
      pageLinkClass: {
        type: String
      },
      prevClass: {
        type: String
      },
      prevLinkClass: {
        type: String
      },
      nextClass: {
        type: String
      },
      nextLinkClass: {
        type: String
      }
    },
    data () {
      return {
        selected: 0
      }
    },
    computed: {
      pages: function () {
        let items = {}
        if (this.pageCount <= this.pageRange) {
          for (let index = 0; index < this.pageCount; index++) {
            items[index] = {
              index: index,
              content: index + 1,
              selected: index === this.selected
            }
          }
        } else {
          let leftPart = this.pageRange / 2
          let rightPart = this.pageRange - leftPart
          if (this.selected < leftPart) {
            leftPart = this.selected
            rightPart = this.pageRange - leftPart
          } else if (this.selected > this.pageCount - this.pageRange / 2) {
            rightPart = this.pageCount - this.selected
            leftPart = this.pageRange - rightPart
          }
          for (let index = 0; index < this.pageCount; index++) {
            let page = {
              index: index,
              content: index + 1,
              selected: index === this.selected
            }
            if (index <= this.marginPages - 1 || index >= this.pageCount - this.marginPages) {
              items[index] = page
              continue
            }
            let breakView = {
              content: '...',
              disabled: true
            }
            if ((this.selected - leftPart) > this.marginPages && items[this.marginPages] !== breakView) {
              items[this.marginPages] = breakView
            }
            if ((this.selected + rightPart) < (this.pageCount - this.marginPages - 1) && items[this.pageCount - this.marginPages - 1] !== breakView) {
              items[this.pageCount - this.marginPages - 1] = breakView
            }
            let overCount = this.selected + rightPart - this.pageCount + 1
            if (overCount > 0 && index === this.selected - leftPart - overCount) {
              items[index] = page
            }
            if ((index >= this.selected - leftPart) && (index <= this.selected + rightPart)) {
              items[index] = page
            }
          }
        }
        return items
      }
    },
    methods: {
      handlePageSelected (selected) {
        if (this.selected === selected) return
        this.selected = selected
        this.clickHandler(this.selected + 1)
      },
      prevPage () {
        if (this.selected <= 0) return
        this.selected--
        this.clickHandler(this.selected + 1)
      },
      nextPage () {
        if (this.selected >= this.pageCount - 1) return
        this.selected++
        this.clickHandler(this.selected + 1)
      }
    }
  }
</script>
<style>
    .pagination > li > a {
        background: transparent;
        border-color: transparent;
        cursor: pointer;
        margin: 0 5px;
    }

    .pagination > li:first-child > a,
    .pagination > li:last-child > a {
        border-color: #cccccc;
        border-radius: 6px;
        color: #cccccc;
    }

    .pagination > li:first-child > a {
        margin-left: 0;
        margin-right: 10px;
    }

    .pagination > li:last-child > a {
        margin-left: 10px;
        margin-right: 0;
    }

    .pagination > li > a:hover,
    .pagination > li.active > a {
        background: #3498db;
        border-color: #3498db;
        border-radius: 6px;
        color: #ffffff;
        margin-bottom: 1px;
        margin-top: 1px;
        padding-bottom: 5px;
        padding-top: 5px;
    }
</style>
<template>
    <ul :class="containerClass">
        <li :class="prevClass">
            <a @click="prevPage()" :class="prevLinkClass">
                {{ prevText }}
            </a>
        </li>
        <li v-for="page in pages" :class="[{ active: page.selected, disabled: page.disabled }, pageClass]">
            <a v-if="page.disabled" :class="pageLinkClass">{{ page.content }}</a>
            <a v-else @click="handlePageSelected(page.index)" :class="pageLinkClass">{{ page.content }}</a>
        </li>
        <li :class="nextClass">
            <a @click="nextPage()" :class="nextLinkClass">
                {{ nextText }}
            </a>
        </li>
    </ul>
</template>