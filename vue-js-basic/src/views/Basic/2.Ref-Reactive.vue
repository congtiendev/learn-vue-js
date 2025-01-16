<template>
  <DefaultLayout>
    <div class="my-5">
      <h2 class="text-center">So sánh giữa ref và reactive trong Vue.js</h2>
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th>Khía cạnh</th>
            <th>ref</th>
            <th>reactive</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Khái niệm</td>
            <td>
              Được dùng để tạo một giá trị đơn lẻ (primitive values) hoặc đối
              tượng có thể phản ứng.
            </td>
            <td>
              Được dùng để làm việc với các đối tượng hoặc mảng và theo dõi sự
              thay đổi của chúng.
            </td>
          </tr>
          <tr>
            <td>Đặc điểm</td>
            <td>
              Chỉ phản ứng với giá trị trực tiếp bên trong (ví dụ: giá trị số,
              chuỗi, boolean).
            </td>
            <td>Phản ứng với các thuộc tính của đối tượng hoặc mảng.</td>
          </tr>
          <tr>
            <td>Quản lý thay đổi</td>
            <td>Phải truy cập vào `.value` để lấy hoặc gán giá trị.</td>
            <td>
              Không cần `.value`, bạn có thể trực tiếp truy cập và thay đổi các
              thuộc tính của đối tượng.
            </td>
          </tr>
          <tr>
            <td>Loại giá trị hỗ trợ</td>
            <td>Giá trị đơn lẻ (số, chuỗi, boolean, v.v.).</td>
            <td>Đối tượng, mảng hoặc bất kỳ cấu trúc dữ liệu phức tạp nào.</td>
          </tr>
          <tr>
            <td>Ví dụ sử dụng</td>
            <td>
              <pre>const count = ref(0);</pre>
            </td>
            <td>
              <pre>const state = reactive({ count: 0 });</pre>
            </td>
          </tr>
          <tr>
            <td>Truy cập và cập nhật</td>
            <td>
              - Theo dõi toàn bộ giá trị qua `.value`.
              <pre>count.value = 10;</pre>
            </td>
            <td>
              - Truy cập và cập nhật trực tiếp các thuộc tính.
              <pre>state.count = 10;</pre>
            </td>
          </tr>
          <tr>
            <td>Sử dụng trong template</td>
            <td>Không cần .value vì Vue đã tự unwrap</td>
            <td>Truy cập trực tiếp (ví dụ: `state.count`).</td>
          </tr>
          <tr>
            <td>Khả năng sao chép</td>
            <td>Thường được sử dụng với giá trị đơn lẻ, dễ sao chép.</td>
            <td>
              Sao chép đối tượng hoặc mảng có thể phức tạp hơn nếu có các thuộc
              tính phản ứng.
            </td>
          </tr>
          <tr>
            <td>Khi nào nên sử dụng ?</td>
            <td>Thường không được sử dụng khi có nhiều thuộc tính.</td>
            <td>Sử dụng reactive để quản lý đối tượng/mảng.</td>
          </tr>
          <tr>
            <td>Lưu ý</td>
            <td colspan="2">
              Nếu bạn cần theo dõi một giá trị đơn lẻ, hãy sử dụng ref. Nếu bạn
              cần theo dõi một đối tượng hoặc mảng, hãy sử dụng reactive.
              <br />
              Sử dụng reactive với array bạn cần truyền thêm ref(array) để Vue
              có thể theo dõi sự thay đổi của mảng.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, reactive } from "vue";
import DefaultLayout from "@/layouts/DefaultLayout.vue";

// Ví dụ sử dụng ref
const count = ref(0);

// Ví dụ sử dụng reactive
const state = reactive({
  count: 0,
});
</script>

<style scoped>
.table {
  border: 1px solid #ccc;
  width: 100%;
  margin-top: 20px;
}

th,
td {
  text-align: center;
  vertical-align: middle;
}

thead {
  background-color: #343a40;
  color: white;
}

tbody tr:nth-child(even) {
  background-color: #f8f9fa;
}

tbody tr:hover {
  background-color: #d3d3d3;
}
</style>
