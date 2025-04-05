import { StyleSheet } from "@react-pdf/renderer";
export const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    padding: 30,
    fontSize: 11,
    fontFamily: "Times-Roman",
    lineHeight: 1,
    backgroundColor: "#fff",
  },
  section: {
    marginBottom: 12,
  },
  header: {
    fontSize: 16,
    marginBottom: 4,
    fontWeight: "bold",
    // borderBottom: "1px solid #000",
    paddingBottom: 2,
  },
  text: {
    marginBottom: 2,
  },
  bold: {
    fontWeight: "bold",
  },
  link: {
    color: "blue",
    textDecoration: "underline",
  },
});
