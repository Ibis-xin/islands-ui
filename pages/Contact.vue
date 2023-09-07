<template>
  <main class="mb-4">
    <div class="container px-4 px-lg-5">
      <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
          <h2 class="post-title">RPA 數位優化器</h2>
          <p>歡迎在下方留言說明你的需求，或是寄信至：<a
              href="mailto:rpadigitaltransformer@gmail.com">rpadigitaltransformer@gmail.com</a>，我們將盡快與你聯繫！
          </p>
          <p>也可以到 RPA 數位優化器的社群追蹤我們！</p>
          <div class="my-5">
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form @submit="send()" id="contactForm" data-sb-form-api-token="API_TOKEN">
              <div class="form-floating">
                <input v-model="form.name" class="form-control" id="name" type="text" placeholder="Enter your name..."
                  data-sb-validations="required" />
                <label for="name">姓名</label>
                <div class="invalid-feedback" data-sb-feedback="name:required">A name is required.</div>
              </div>
              <div class="form-floating">
                <input v-model="form.company" class="form-control" id="company" type="text"
                  placeholder="Enter your company..." data-sb-validations="required" />
                <label for="company">單位或機構名稱</label>
              </div>
              <div class="form-floating">
                <input v-model="form.email" class="form-control" id="email" type="email" placeholder="Enter your email..."
                  data-sb-validations="required,email" />
                <label for="email">E-mail</label>
                <div class="invalid-feedback" data-sb-feedback="email:required">An email is required.</div>
                <div class="invalid-feedback" data-sb-feedback="email:email">Email is not valid.</div>
              </div>
              <div class="form-floating">
                <input v-model="form.phone" class="form-control" id="phone" type="tel"
                  placeholder="Enter your phone number..." data-sb-validations="required" />
                <label for="phone">連絡電話</label>
                <div class="invalid-feedback" data-sb-feedback="phone:required">A phone number is required.</div>
              </div>
              <div class="form-floating">
                <textarea v-model="form.message" class="form-control" id="message"
                  placeholder="Enter your message here..." style="height: 12rem;"
                  data-sb-validations="required"></textarea>
                <label for="message">訊息內容</label>
                <div class="invalid-feedback" data-sb-feedback="message:required">A message is required.</div>
              </div><br />
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3">
                  <div class="fw-bolder">Form submission successful!</div>To activate this form, sign up at<br /><a
                    href="https://startbootstrap.com/solution/contact-forms">https://startbootstrap.com/solution/contact-forms</a>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3">Error sending message!</div>
              </div>
              <!-- Submit Button-->
              <button class="btn btn-primary text-uppercase" id="submitButton"
                type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<script setup lang="ts">
const form = reactive({
  name: "",
  company: "",
  phone: "",
  email: "",
  message: "",

})
function send() {
  // 這裡要卡控
  const mail = useMail()
  mail.send({
    from: form.name,
    subject: 'rpaitw.com form: ',
    text:
      `致 RPAI Digital Transformers:

${form.message}

----------------------------------------------------------------
姓名: ${form.name}
連絡電話: ${form.phone}
E-mail: ${form.email}
單位或機構名稱: ${form.company}`,
  })
}
</script>