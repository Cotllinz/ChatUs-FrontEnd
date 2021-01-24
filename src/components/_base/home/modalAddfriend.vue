<template>
  <b-modal id="modal_addfriend" centered hide-footer>
    <template #modal-title>
      <h4 class="modal_phone ">
        Search new friend
      </h4>
    </template>
    <div class="form_phone">
      <label for="phone">Email</label>
      <b-input-group class="mb-2 mr-sm-2 mb-sm-0">
        <template #prepend>
          <b-input-group-text class="search_btn">
            <b-icon
              icon="envelope"
              style="color: #5e81e2;"
              font-scale="1.5"
              aria-hidden="true"
            ></b-icon
          ></b-input-group-text>
        </template>
        <b-form-input
          type="email"
          autocomplete="off"
          class="shadow-none"
          placeholder="Type email your friend ..."
        ></b-form-input>
      </b-input-group>
    </div>
    <div class="list_search mt-lg-3">
      <div class="d-flex mb-lg-3 align-items-center">
        <img
          class="image_friendProfile"
          src="https://images.unsplash.com/photo-1587628604439-3b9a0aa7a163?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
          alt="image_chatfriend"
        />
        <div class="ml-lg-3 name_tag mt-lg-3">
          <h2>Theresa Webb</h2>
          <p class="mt-lg-2">Why did you do that?</p>
        </div>
        <button
          type="button"
          class="ml-auto py-lg-2 px-lg-2 btn_addfriend align-items-center"
        >
          <b-icon
            icon="person-plus-fill"
            style="color: #ffffff;"
            font-scale="1.5"
            aria-hidden="true"
          ></b-icon>
          Add Him
        </button>
      </div>
    </div>
    <button
      type="button"
      class="mt-3 btn-cancel py-lg-2 w-100"
      @click="$bvModal.hide('modal_addfriend')"
    >
      Cancel
    </button>
  </b-modal>
</template>
<script>
export default {
  name: 'ModalPhone'
}
</script>
<style scoped>
.modal_phone {
  font-size: 20px;
  font-weight: 700;
  margin: 0 auto;
  font-family: 'Poppins', sans-serif;
}
label {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
}

.btn-cancel {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  border-radius: 10px;
  color: #7e98df;
  border: 1px solid#7e98df;
  background: none;
  outline: none;
  font-size: 16px;
}
.btn_addfriend {
  font-family: 'Rubik', sans-serif;
  font-weight: 500;
  font-size: 16px;
  background: #7e98df;
  border-radius: 10px;
  color: #ffffff;
  border: none;
  outline: none;
}
.btn_addfriend:hover {
  background: #6384e0;
}
.btn-cancel:hover {
  border: 1px solid #5e81e2;
  color: #5e81e2;
}
input[type='email'] {
  font-family: 'Poppins', sans-serif;
  outline: none;
  padding: 5px;
  height: 40px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: none !important;
  border: 1px solid #ccc;
  border-left: none;
}
/deep/ .modal-content {
  border-radius: 20px;
}
.chat_list {
  height: 100px;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat_list::-webkit-scrollbar {
  width: 5px;
}
.chat_list::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}
.chat_list::-webkit-scrollbar-thumb {
  border-radius: 10px;
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
}
.image_friendProfile {
  width: 70px;
  height: 70px;
  border-radius: 10px;
  object-fit: cover;
}
.name_tag,
.desc_time {
  font-family: 'Poppins', sans-serif;
}
.name_tag h2 {
  margin-bottom: 0;
  font-weight: 700;
  font-size: 18px;
}
.name_tag p,
.desc_time h3 {
  font-size: 14px;
}
.name_tag p {
  color: #7e98df;
}
.desc_time h3 {
  color: #848484;
}
.badge {
  width: 25px;
  font-size: 10px;
  padding-top: 8px;
  padding-left: 4px;
  height: 25px;
  border-radius: 50%;
  background: #7e98df;
  color: white;
}
</style>
