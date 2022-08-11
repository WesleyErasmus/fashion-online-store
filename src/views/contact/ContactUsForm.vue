<template>
    <!-- Contact page message-us form -->
    <div class="message-container">
        <div class="message-heading">Let's Start a Conversation</div>
        <p class="message-subheading">
            Send us a message and let us know about your experience
        </p>

        <!-- User form wrapper -->
        <div class="form-wrapper">

            <!-- Input field error messages -->
            <p v-show="errors.length">
            <ul>
                <li class="error-message" v-for="error in errors" :key="error">{{ error }}</li>
            </ul>
            </p>

            <!-- User form -->
            <form @submit.prevent="saveMessage(e)" class="message-form">

                <div class="name-email-input-container">
                    <div class="form-floating mb-3">
                        <!-- Username input -->
                        <input type="text" v-model="storedUserMessage.name"
                            class="form-control user-input username-input" id="floatingInput name" name="name"
                            placeholder="Full Name" />
                        <label for="floatingInput">Full Name</label>
                    </div>


                    <!-- User email input -->
                    <div class="form-floating mb-3">
                        <input v-model="storedUserMessage.email" type="text" class="form-control user-input email-input"
                            id="floatingPassword email" placeholder="Email address" name="email" />
                        <label for="floatingPassword">Email address</label>
                    </div>
                    <!-- End of name an input container -->
                </div>


                <!-- User message us input -->
                <div class="form-floating">
                    <textarea v-model="storedUserMessage.message" class="form-control message-text-area"
                        placeholder="Leave a comment here" id="floatingTextarea message" name="message"></textarea>
                    <label for="floatingTextarea">Message</label>
                </div>
                <div>
                    <!-- Submit button -->
                    <span><button class="sbmt-btn" type="submit">
                            Send Message
                        </button></span>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: "Contact",
    data() {
        return {
            // User message info - for saving to local storage
            customerMessages: [],

            // User info and message object class
            storedUserMessage: {
                name: null,
                email: null,
                message: null,
            },

            // Message form input field error messages
            errors: [],
        };
    },
    mounted() {
        if (localStorage.getItem("customerMessages")) {
            try {
                this.customerMessages = JSON.parse(
                    localStorage.getItem("customerMessages")
                );
            } catch (e) {
                localStorage.removeItem("customerMessages");
            }
        }
    },
    methods: {
        validEmail() {
            var re =
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(this.storedUserMessage.email);
        },

        // Saves customer messages from form inputs
        saveMessage(e) {
            // ensure they actually typed something
            if (!this.storedUserMessage) {
                return;
            }

            // Form validations

            // Empty error message array
            this.errors = [];
            console.log(this.errors);

            // Name input field validation
            if (!this.storedUserMessage.name) {
                this.errors.push("Please enter your full name");
                return;
            }

            // email input field validation
            if (!this.storedUserMessage.email) {
                this.errors.push("Please enter your email address");
                return;
            } else if (!this.validEmail(this.email)) {
                this.errors.push(
                    "Please enter a valid email address (e.g. johndoe@mail.com)"
                );
                return;
            }

            // Message input field validation
            if (!this.storedUserMessage.message) {
                this.errors.push("Please fill in the message field");
                return;
            }

            // Push the storedUserMessage object class to local storage
            this.customerMessages.push(this.storedUserMessage);
            this.saveSubscriber();

            // Clears input fields after submit
            this.storedUserMessage.name = null;
            this.storedUserMessage.email = null;
            this.storedUserMessage.message = null;

            if (!this.errors.length) {
                return true;
            }
            e.preventDefault();
        },
        saveSubscriber() {
            const parsed = JSON.stringify(this.customerMessages);
            localStorage.setItem("customerMessages", parsed);
        },
    },
};
</script>

<style scoped>
/* Message us form */
.message-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5rem;
    background: rgb(230, 230, 230);
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
    padding: var(--card-padding);
    background: #2f3131;
}

.message-heading {
    font-size: calc(25px + 0.5rem);
    color: #fff;
    color: var(--secondary-grey);
}

.message-subheading {
    color: var(--primary-color);
    font-weight: bold;
    font-size: calc(12px + 0.3rem);
}

/* Message us form wrapper */
.error-message {
    color: red;
    list-style-type: none;
}

.form-wrapper {
    padding: var(--card-padding);
}

.name-email-input-container {
    display: flex;
}

/* Username input field */
.username-input {
    margin-right: 7px;
}

/* User email input field */
.email-input {
    margin-left: 7px;
}

/* User message input field */
.message-text-area {}

/* Message us form submit button */
.sbmt-btn {
    margin: 1rem 0;
    background: var(--primary-color);
    font-size: calc(14px + 0.3rem);
    color: #fff;
}
</style>
