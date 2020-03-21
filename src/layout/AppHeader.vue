<template>
    <header class="header-global">
        <base-nav key="primary"
                  type="primary"
                  effect="dark"
                  expand
                  title="Password Generator"
                  :content-id="`navbar-primary`">
            <ul class="navbar-nav ml-lg-auto">
                <li class="nav-item">
                    <a class="nav-link nav-link-icon" href="https://github.com/Leohige/password-generator" target="_blank">
                        <i class="fa fa-github fa-2x text-white"></i>
                    </a>
                </li>
            </ul>
        </base-nav>
    </header>
</template>
<script>
import BaseNav from "@/components/BaseNav";

export default {
  components: {
    BaseNav
  }
};
</script>
