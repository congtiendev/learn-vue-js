<template>
    <DefaultLayout>
    <div class="my-5">
      <h1 class="text-center">Các Events trong VueJs</h1>
      <ul class="list-group">
        <li class="list-group-item">
            Events trong VueJs là các hành động mà người dùng thực hiện trên các phần tử HTML như click, hover, focus, blur, submit, change, keyup, keydown, keypress, v.v.
        </li>
        <li class="list-group-item">
            VueJs cung cấp các directives để xử lý các events như v-on, @
        </li>
        <li class="list-group-item">
            <pre v-pre>
                CÚ PHÁP:
                v-on:eventName="handlerFunction"
                - eventName: tên của event cần xử lý
                - handlerFunction: hàm xử lý sự kiện
                - Có thể viết tắt v-on:eventName="handlerFunction" thành @eventName="handlerFunction"
                
                - Ví dụ 1: <'button @click="handleClick">Click me</'button>
                
                - Ví dụ 2: <'input @input="handleInput"> </'input> (Khi giá trị input thay đổi)
                
                - Ví dụ 3: <'form @submit="handleSubmit"> </'form>
                
                - Ví dụ 4: <'input @keyup.enter="handleEnter"> </'input> (Khi nhấn phím Enter)
                
                - Ví dụ 5: <'input @focus="handleFocus"> </'input> (Khi focus)
                
                - Ví dụ 6: <'input @blur="handleBlur"> </'input> (Khi mất focus)
                
                - Ví dụ 7: <'input @change="handleChange"> </'input> (Khi giá trị thay đổi)
            </pre>
        </li>
        <li class="list-group-item">
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th>Event Modifier</th>
                        <th>Mô tả</th>
                        <th>Ví dụ</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>.stop</td>
                        <td>Ngăn chặn sự kiện lan truyền lên các phần tử cha</td>
                        <td><'button @click.stop="handleClick">Click me<'/button></td>
                    </tr>
                    <tr>
                        <td>.prevent</td>
                        <td>Ngăn chặn hành vi mặc định của sự kiện (ví dụ: form submit, link click)</td>
                        <td><'form @submit.prevent="handleSubmit"><'/form></td>
                    </tr>
                    <tr>
                        <td>.capture</td>
                        <td>Xử lý sự kiện ở chế độ capture (từ ngoài vào trong)</td>
                        <td><'div @click.capture="handleClick"><'/div></td>
                    </tr>
                    <tr>
                        <td>.self</td>
                        <td>Chỉ xử lý sự kiện khi click vào phần tử đó, không xử lý khi click vào các phần tử con</td>
                        <td><'button @click.self="handleClick">Click me<'/button></td>
                    </tr>
                    <tr>
                        <td>.once</td>
                        <td>Sự kiện chỉ được gọi một lần duy nhất</td>
                        <td><'button @click.once="handleClick">Click me<'/button></td>
                    </tr>
                    <tr>
                        <td>.passive</td>
                        <td>Ngăn chặn hành vi mặc định của sự kiện nhưng không bị block</td>
                        <td><'div @scroll.passive="handleScroll"><'/div></td>
                    </tr>
                    <tr>
                        <td>.exact</td>
                        <td>Chỉ xử lý sự kiện khi chính xác là phím được nhấn</td>
                        <td><'button @click.ctrl.exact="handleCtrlClick">Click me<'/button></td>
                    </tr>
                    <tr>
                        <td>.left</td>
                        <td>Chỉ xử lý sự kiện khi click chuột trái</td>
                        <td><'button @click.left="handleClick">Click me<'/button></td>
                    </tr>
                    <tr>
                        <td>.right</td>
                        <td>Chỉ xử lý sự kiện khi click chuột phải</td>
                        <td><'button @click.right="handleClick">Click me<'/button></td>
                    </tr>
                    <tr>
                        <td>v-model</td>
                        <td>
                            Dùng v-model để đồng bộ dữ liệu giữa component cha và con.
                        </td>
                        <td>
                            <pre>
                                Component con (Child.vue):
                                <'input :value="modelValue" @input="updateValue" />
                                  
                                import { defineProps, defineEmits } from 'vue';
                                  
                                const props = defineProps(['modelValue']);
                                  const emit = defineEmits(['update:modelValue']);
                                  
                                  function updateValue(event) {
                                    emit('update:modelValue', event.target.value);
                                  }

                                  Component cha (Parent.vue):
                                    <'Child v-model="text" />
                                    <'p>{'{ text }''}<'/p>
                                  
                                  import Child from './Child.vue';
                                  import { ref } from 'vue';
                                  
                                  const text = ref('');
                                  
                            </pre>
                        </td>
                    </tr>
                    <tr>
                        <td>@keyup.enter (.enter, .esc, .tab, .space)</td>
                        <td>
                            Xử lý sự kiện khi nhấn phím Enter
                        </td>
                        <td>
                            <'input @keyup.enter="handleEnter"><'/input>
                        </td>
                    </tr>
                    <tr>
                        <td>@keydown</td>
                        <td>
                            Xử lý sự kiện khi nhấn phím xuống
                        </td>
                        <td>
                            <'input @keydown="handleKeyDown"><'/input>
                        </td>
                    </tr>
                    <tr>
                        <td>@keyup</td>
                        <td>
                            Xử lý sự kiện khi nhả phím
                        </td>
                        <td>
                            <'input @keyup="handleKeyUp"><'/input>
                        </td>
                    </tr>
                    <tr>
                        <td>@keydown.ctrl.enter</td>
                        <td>
                            Xử lý sự kiện khi nhấn phím Enter và giữ phím Ctrl
                        </td>
                        <td>
                            <'input @keydown.ctrl.enter="handleCtrlEnter"><'/input>
                        </td>
                    </tr>
                </tbody>
            </table>
        </li>
      </ul>
    </div>
  </DefaultLayout>
</template>
<script setup>
import DefaultLayout from "@/layouts/DefaultLayout.vue";
</script>
