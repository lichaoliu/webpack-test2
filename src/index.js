import $ from 'jquery'
import './css/1.css'
import './css/1.less'
// import Vue from 'vue'
import App from './components/App.vue'

$(function () {
    $('li:odd').css('backgroundColor', 'red')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Persion {
    static info = 'aaa'
}

console.log(Persion.info);