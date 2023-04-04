export default function Article(props) {
  return (
    <main>
      <article>
        <div id="articleTitles">
          <h2>11/11/20</h2>
        <h3>On the Street In Brooklyn</h3>
        </div>
        <img src={require("./images/blog-image-1.jpg")} alt="blog-image-1" />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          voluptas, quis rerum in ipsam a eius, voluptatum molestiae, laborum
          consequuntur aperiam sit. Numquam, recusandae omnis facilis fugit ab
          nihil atque? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dicta, a veritatis, architectoquod dolor rem nisi nihil ab omnis eum
          porro quos atque nostrum dolorum aliquam. Natus hic a possimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sed unde alias esse
          iste possimus cumque iure sapiente consequuntur maxime deleniti a sint
          harum natus, perferendis doloribus pariatur voluptatibus libero
          blanditiis.
        </p>

        <a className="continueAnchor" href="#">
          Continues..
        </a>
      </article>

      <article>
        <div id="articleTitles">
          <h2>11/11/20</h2>
          <h3>Vintage in Vogue</h3>
        </div>
        <img src={require("./images/blog-image-2.jpg")} alt="blog-image-2" />
        <p>
          Sorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
          voluptas, quis rerum in ipsam a eius, voluptatum molestiae, laborum
          consequuntur aperiam sit. Numquam, recusandae omnis facilis fugit ab
          nihil atque? Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Dicta, a veritatis, architectoquod dolor rem nisi nihil ab omnis eum
          porro quos atque nostrum dolorum aliquam. Natus hic a possimus. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Sed unde alias esse
          iste possimus cumque iure sapiente consequuntur maxime deleniti a sint
          harum natus, perferendis doloribus pariatur voluptatibus libero
          blanditiis.
        </p>
        <a className="continueAnchor" href="#">
          Continues..
        </a>
      </article>
    </main>
  );
}
