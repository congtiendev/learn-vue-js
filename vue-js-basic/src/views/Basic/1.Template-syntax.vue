<template>
    <DefaultLayout>
        <div class="my-5">
            <h1 class="text-center">Template Syntax</h1>
            <ul class="list-group">
                <li class="list-group-item">
                    v-show : ẩn hiển thị phần tử dựa trên điều kiện nhưng vẫn giữ nó trong DOM (display: none)
                </li>
                <li class="list-group-item">
                    v-html : hiên thị nội dung HTML
                </li>
                <li class="list-group-item">
                    v-if : thêm hoặc xóa phần tử khỏi DOM dựa trên điều kiện
                </li>
                <li class="list-group-item">
                    v-for : lặp qua một mảng hoặc một đối tượng
                    <pre v-pre>
            CÚ PHÁP:
            v-for="(item, index) in items" :key="index"
            - item: phần tử hiện tại
            - index: chỉ số của phần tử hiện tại
            - items: mảng hoặc đối tượng cần lặp
            - key: giá trị duy nhất để xác định mỗi phần tử (key phải là giá trị duy nhất)
            - Lưu ý : Không nên dùng index làm key vì khi dữ liệu thay đổi, Vue sẽ không cập nhật đúng vị trí của phần tử dẫn đến lỗi hiển thị.
            - Nếu không sử dụng key trong v-for, có thể dẫn đến :
                + Lỗi hiển thị phần tử trùng lặp
                + Hiệu suất giảm do Vue phải render lại toàn bộ phần tử để phân biệt giữa các phần tử trùng lặp
                + Lỗi xử lý sự kiện 
          </pre>
                </li>
                <li class="list-group-item">
                    v-bind : ràng buộc một hoặc nhiều thuộc tính của phần tử
                    <pre v-pre>
            CÚ PHÁP:
            v-bind:attribute="expression"
            - attribute: thuộc tính cần ràng buộc
            - expression: biểu thức để ràng buộc
            - Có thể viết tắt v-bind:attribute="expression" thành :attribute="expression"

            - Ví dụ 1: :class="{ active: isActive, disabled: !isActive }"

            - Ví dụ 2: :class="['text-center', 'text-dark'], { active: isActive, disabled: !isActive }"

            - Ví dụ 3 : const styles = { color: 'red', fontSize: '14px' }
                        <'div :style="styles"></'div>

            - Ví dụ 4 : <'input :value="message" :disabled="checkDisabled" @input="message = $event.target.value">

            - Ví dụ 5 : 
            const objectOfAttrs = {
                id: 'container',
                class: 'wrapper',
                style: 'background-color:green'
              }
              <'div v-bind="objectOfAttrs"></'div>

            - Ví dụ 6 : 
                <'a :[attributeName]="url"> ...  </'a>
                <'a @[eventName]="doSomething"> ... </'a>
          </pre>
                </li>
            </ul>
        </div>
    </DefaultLayout>
</template>

<script setup>
    import DefaultLayout from '@/layouts/DefaultLayout.vue';
</script>
