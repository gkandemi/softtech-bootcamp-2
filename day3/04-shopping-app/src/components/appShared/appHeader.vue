<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">SoftBazaar</a>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/">Anasayfa</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" active-class="active" to="/cart">Sepetim({{ _userCartCount }})</router-link>
          </li>
        </ul>
        <div class="nav-item">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/product-list">Ürün İşlemleri</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["_userCartCount"])
  }
};
</script>
