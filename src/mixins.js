import router from './router';

export const mixins = {
    created() {
        /* const h = this.$createElement;
        const messageVNode = h("div", { class: ["foobar"] }, [
            h("p", { class: ["text-center"] }, [
                " Tu sesion ha expirado, cerrando sesion"
            ]),
            h("p", { class: ["text-center"] }, [h("b-spinner")])
        ]); */

        if (localStorage.getItem("name")) {
            let now = new Date();

            if (new Date(localStorage.getItem("time")) <= now) {
                /* this.$bvModal.msgBoxOk([messageVNode], {
                    title: "Expired session",
                    centered: true,
                    noCloseOnBackdrop: true,
                    noCloseOnEsc: true,
                }); */
                localStorage.clear();
                alert("Session expired");       
                router.push("/");
            } 
        }
    }
}