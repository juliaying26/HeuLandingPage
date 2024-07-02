import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <a href="mailto:contact@heulearning.org">
        <button className={styles.nav_buttons_left}>Contact</button>
      </a>
      <a
        href="https://www.indeed.com/cmp/Heu-Learning?from=gnav-one-host&hl=en_US&co=US&_gl=1*1nb7wkj*_gcl_aw*R0NMLjE3MTk5NDk2MDIuQ2p3S0NBand5bzYwQmhCaUVpd0FIbVZMSmNoUXViZHRDTGVtMUVrV3hhSFJOMENqSV9wbWx3cFRwOXhYMEJSdXBHRTY2RXRnYlR0WThSb0NGajBRQXZEX0J3RQ..*_gcl_dc*R0NMLjE3MTk5NDk2MDIuQ2p3S0NBand5bzYwQmhCaUVpd0FIbVZMSmNoUXViZHRDTGVtMUVrV3hhSFJOMENqSV9wbWx3cFRwOXhYMEJSdXBHRTY2RXRnYlR0WThSb0NGajBRQXZEX0J3RQ..*_gcl_au*ODY5OTE4MzAuMTcxOTkxNDI0Mw..*_ga*MjcxOTMzMzg2LjE3MTk5MTQyNDA.*_ga_5KTMMETCF4*MTcxOTk0ODQyNS40LjEuMTcxOTk0OTc3Mi41OC4wLjA.*_fplc*ZVJKQnlsb0JwT2xjSk52T3pVbWlEb285YSUyRlNHcTFmTElaaiUyQmlQajRjY1pibU0wUVlnaEtEOFV3YjhzUGNRcmlzN2Jvd3NtREMwRDFnbTlXRktXRGdkWEglMkJTT2VUUTJ2bEpNa2F1YWJTak5oWXBuSGtBOWRzell6NnF5RVdRJTNEJTNE"
        target="_blank"
      >
        <button className={styles.nav_buttons}>Roles</button>
      </a>
      <a href="https://givebutter.com/heu" target="_blank">
        <button className={styles.nav_buttons_right} id="right">
          Donate
        </button>
      </a>
    </div>
  );
}
