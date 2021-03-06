import vSelect from "vue-select";
import Multiselect from "vue-multiselect";
import App from "vue/App.vue";
import laravelVuePagination from "laravel-vue-pagination";
import tableHeader from "vue/components/table/tableHeader";
import statusTag from "vue/components/table/statusTag";
import toggleStatus from "vue/components/table/toggleStatus";
import editAction from "vue/components/table/editAction";
import deleteAction from "vue/components/table/deleteAction";
import errors from "vue/components/Partials/errors";

Vue.component("Dashboard", App);
Vue.component("pagination", laravelVuePagination);
Vue.component("multiselect", Multiselect);
Vue.component("v-select", vSelect);
Vue.component("tableHeader", tableHeader);
Vue.component("statusTag", statusTag);
Vue.component("toggleStatus", toggleStatus);
Vue.component("editAction", editAction);
Vue.component("deleteAction", deleteAction);
Vue.component("errors", errors);
