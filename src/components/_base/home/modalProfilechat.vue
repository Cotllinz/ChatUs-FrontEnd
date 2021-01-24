<template>
  <b-modal id="modal_showprofile" centered hide-header-close hide-footer>
    <header class="profile_page">
      <div class="d-flex">
        <h3 class="mr-auto mt-lg-2 ml-auto">@Cotlinz</h3>
      </div>
      <div class="profile text-center mt-lg-2">
        <img
          class="profile_pic"
          src="https://images.unsplash.com/photo-1572863141204-83031c77e65a?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
          alt="imageProfile"
        />
        <h2 class="mt-lg-3">Gloria Mckinney</h2>
        <p>@wdlam</p>
      </div>
    </header>
    <main>
      <div class="account mt-lg-5">
        <h2>Phone number</h2>
        <h5>+375(29)9638433</h5>
      </div>
      <div class="bio mt-lg-4">
        <h3>I’m Senior Frontend Developer from Microsoft</h3>
        <p>Bio</p>
      </div>
      <div class="location">
        <h2>Location</h2>
      </div>
    </main>
    <button
      type="button"
      class="mt-3 btn-cancel py-lg-2 w-100"
      @click="$bvModal.hide('modal_showprofile')"
    >
      Close
    </button>
  </b-modal>
</template>
<script>
export default {
  name: 'ModalProfileChat',
  methods: {}
}
</script>
<style scoped>
.profile_pic {
  width: 100px;
  height: 100px;
  border-radius: 30px;
  object-fit: cover;
}
.profile_page {
  font-family: 'Rubik', sans-serif;
}
.profile_page h3 {
  font-size: 24px;
  color: #7e98df;
}
.profile h2 {
  font-size: 22px;
  margin-bottom: 0;
}
main {
  font-family: 'Poppins', sans-serif;
}
.account h2,
.location h2 {
  font-weight: 700;
  font-size: 19px;
}
.account h5,
a {
  font-size: 16px;
}
.bio h3 {
  font-weight: 700;
  font-size: 16px;
  padding-right: 12px;
}
.bio p {
  font-size: 16px;
  color: #848484;
}

.settings h2 {
  font-size: 19px;
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
.btn-cancel:hover {
  border: 1px solid #5e81e2;
  color: #5e81e2;
}
</style>
