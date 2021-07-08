import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Published from "./Published";
import Rules from "./Rules";
import Post from "./Post";
import "./Main.css";

const Main = () => {
  return (
    <div className="color_bg">
      <Header />
      <main role="main">
        <Published />
        <Rules />
        <Post />
        <section className="panel important">
      <h2>Users</h2>
      <table>
        <thead>
          <th>date</th>
          <th>Username</th>
          <th>Issues</th>
          <th>comments</th>
          <th>votes</th>
        </thead>
        <tbody>
        <tr>
          <td>Oct 10, 2020</td>
          <td>Pete</td>
          <td>44</td>
          <td>776</td>
          <td>124,797</td>
        </tr>
        <tr>
          <td>Jan 1, 2020</td>
          <td>Mary</td>
          <td>469</td>
          <td>2517</td>
          <td>234,574</td>
        </tr>
        <tr>
          <td>Oct 10, 2020</td>
          <td>Jake</td>
          <td>87</td>
          <td>221</td>
          <td>223,432</td>
        </tr>
        <tr>
          <td>Dec 23, 2020</td>
          <td>Rosemary</td>
          <td>724</td>
          <td>563</td>
          <td>435,645</td>
        </tr>
        </tbody>
      </table>
    </section>
      </main>
      <Footer />
    </div>
  );
};

export default Main;