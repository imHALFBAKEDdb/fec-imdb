import React from "react";
import styles from "../../static/styles/style.css";

const NavBar = () => {
  return (
    <div>
      <div className={styles.container}>
        <img
          className={styles.weblogo}
          src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAEkAlwMBEQACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAAMEBgcCAf/EAEwQAAEDAgIEBwcRBgcBAAAAAAECAwQABQYRBxIhshMxNTZhc3RBUXKCk7PRCBQVIzdEU1RxgZGSlKGxwcIiMkJDw9ImM1ViY4SiFv/EABoBAAIDAQEAAAAAAAAAAAAAAAMEAAIFAQb/xAAzEQACAQICBwcDAwUAAAAAAAAAAQIDBAUREjEyMzRxkRMhQVFSgbEUU3IiYfAVIyRCof/aAAwDAQACEQMRAD8Av1/vcpU12PGdU000dUlByKj3dteVxPE63bOlSeSXd3eZp29vDQUpLNsFeyM747J8sr01l/WXP3JdWM9jT9K6CFxnfHZPlVemory5+5LqydjT9K6Dzc6affknyqvTV1dXH3JdWVdKn6V0JDcyZ3ZcjyqvTRlc1/W+rKOnD0okIlSj75f8oaKrmv631ZR04eSH0yJPxh7yhoiuK3rfVldCHkOpfkfDu/XNEVet631ZVwj5Dgef+Gc+uauq9X1PqyujHyOuGey/znPrmrdtV9T6smhHyOFPv/DO/XNUder6n1ZNCPkNKkSB/Pd+uaG7it631ZZQj5DK5Mke+XvKGhu4ret9WWUIeQwuXLHFKf8AKGhu5r+t9WXVOHkiO5NmDilyPKq9NCdzX+5Lqy6pw9KI6584e/JPllemhO7uPuS6suqVP0roceyM747J8qr01X6y5+5LqzvY0/SheyM747J8qr01PrLn7kurJ2NP0roHsMXl96UIcpZc1gS2tXGCBxdOytvCcRqVKnY1XnnqYndW8Yx04gG6cpzOvXvGsS84mp+T+Ryju48iLSwQ5deZjtKekvNMtJyBcdcCEjPYNpolKlOq9GCzZWUlFZtnDd6s447vbvtjfppxWVz6H0AutT8wk7MhxGEPypkZhlzLUcdeSlK8xmMiTkdm2u07erKTjGObRWU4pZtnKL/Yxx3q2fbG/wC6mFaV/Q+gN1YeYSgTIk9tTkCXHkoSrVUph1KwDlnkcjx1JUp09tZEUlLUNrv9kacW07ebahxCilaFS2wUkbCCM9ho8batlssG5x8ztvENiWpKE3u2KUogJAmNkkniHHV/p6y/1ZzTj5kmfdLdbloRcLhEirWCUJkPpbKgOPIE7a5GlUms4rMjklrIhxHYSche7Wf+436a67et6WTTj5j7E6FLOUSZGfJ7jTyV/gaDOjUjriy6nF+J0sbcqWYQDv3qztOLacu9uQ4hRStCpbYKSDkQRnx1d2ldrNQZztYeZ4xMiTkLXClx5KUHJRYeS4EnvHI7KWrUalLbjkFhOMtTG3BSsgyGTQywqhAphjl2L424qtHCONh7/DF7rcsi3TlOZ16940vecTU/J/ISju48iLSwQrekgf4LneG1vitfBOK9hS83ZidewMo1rSh7n9h8JjzBrEw/iqv88RqtuomSVtipsegGUeCvMRZGohbLyR8usFfgmsrE456DGKDyzMmucn15cZUrj4d5bmZ/3KJ/OtOKyikAesdsHLtu7U1vCpPZZFrNM9ULypZ+od3hSGHbMglbWZbboUm5TmYUFkvSXlarbYIBUe9trQlJRWbBaz2fCmWqc5EnMLjSmFALQsZKSeMfkakZKSzWoj7jZNDuJ5t5iS7Zc3lPuxEpWy8s5qLZORST3cjlkenorExS3jDKpEaoTb/SzJ8W867129/ziq2KO7jyQvLaZpGhbkW6dpRumsPHNcByz8S9uV5uQ+hg8dULnlQgUwxy7F8bcVWjhHGw9/hi91uWRbpynM69e8aXvOJqfk/kJR3ceRFpYIVzSTzKneG1vitjBOJ9hS83ZiNevMo1rSf7n9h8JjzBrDw5/wCXV/niN1t1EyhptbqiltOZCSrLoAJP3A1tt5ChdNFd0VbJ17XrHV9h5CwnvqRkofgfppS8hpKPNBKbyzKY0yt1Dq0jMNJ119A1gn8VCm28gZLsHLtu7U1vCq1NhnVrNM9UJn7KWjP4B3eFZuEtuEs/MLW1lJ0bc+7J2pP507dvKhLkDhtIJ6ZQBjyWctqmWST3/a00HDW3bRzLVdthHQYojEFwAPHC/qJoGMNqguYS32ymYt51Xnt7/nFVoUN1HkgMtphbC2MncM2aZFhR0OSpDyVpcd2oQkDLi7p2/JS9zZRuZxc9SL06rgnkOR9JOJG3+Eekx5CO605GQE/SkA/fQ54VaSWWjkWVzUXiarZrk1eLTFuLCChEhGZQTnqKBIUM+7kQdteTvbZ21Z0/I1KNTtIaRMpUKFMMcuxfG3FVo4RxsPf4YvdblkW6cpzOvXvGl7zian5P5CUd3HkRaWCFc0k8yp3htb4rYwXifYTvN2YjXrzLNa0n+5/YfCY8wawsO4ur/PEbrbuJQ8CxkzMVwIqhml8rbIPShQ/Ota5lo0m/IWhtAmLJehuOKaOqpba2lZj+FSSkj6CaM0nrKhexRAvDmJZp/kx2Gx8q30H9BoVSX9yEefwWS7mD7By7be1Nbwq9TYZxazTvVDjK62fqHd4Vm4TsS5hKuso+jbn3ZO1J/OnbvcS5FIbSCmmfn5K6hncFBw3hYlqu2yfoN5xT+xHziKXxjcLmEttspuLedV57e/5xVaNDdR5IDPaZftEsVh/Dd/DzSF8IQ2vWSDmng1bPvrKxSpKNalk/EYoJOEjK62hU27RzzLt/hO+cVXj8a4pmtZ7ssdZA0FMMcuxfG3FVo4RxsPf4YvdblkW6cpzOvXvGl7zian5P5CUd3HkRaWCFc0k8yp3htb4rYwXifYTvN2YjXrzLNa0n+5/YfCY8wawsO4ur/PEbrbuJTNGZyx5Zj3n/ANJrUvOHlyF6e2gZiiL6yxJdI2WQalupA6NY5fdRaMtKnF/sVl3NlnsMUI0UYol912XGa+ooH9dL1Jf5VOP7Mul+hsqdg5dtvamt4UzU2GUWs071Qxzutn6h3eFZmE7EuYWtrKPo1592TtSfzp673EuQOG0gnpmUFY9lgHalhkHo9rSaDhvCxLVdthDQbzin9iO+il8Z3C5hLbbKbi3nVee3v+cVWjQ3UeSAz2maJof5u3rrP6aqyMV39IZt9iRktbgobbo55l2/wnfOGvH43xTNaz3ZZKyBoKYY5di+NuKrRwjjYe/wxe63LIt05TmdeveNL3nE1PyfyEo7uPIi0sEK5pI5lTvDa3xWxgnE+wpebsxGvXmUazpO5gWLwmPMGsLDuLq/zxG626iUzRrz6s/XHdNad7w8+QvS20SNK0Yx8c3A5ZB7g3R4yBn9+dUw+enbQZ2sspsssaOGNA0pYG2RKDp6fbkI/RQJTzxFLyRbL+1mZ3YeXLd2preFaNTYfIEtZpfqgjndLR1Lu8KzMI2Jcw1fWjMrNc5Fmuka5RAgvxl66NcZpz6RWnOCnFxepgU8nme3u6y75dJFyuCwuS+QVlKchsAAAHeAAFSnTjTgoR1IjbbzZo+g2C6H7nclIIZ4NLCFHiUonWIHyAD6RWRjVRKnGHiM2y/U2UDFnOq89vf84qtWhuo8kLz2mGsHYu/+btNzjKhLf9dj2pwK1UoWEkbdm394H5umlrqzVxOEs8tEvTq6EWstZT6eBG54DjuRcH2xDqSlSkKdyPeUskfSMj89eMxialdyy8DXtFlSQerLGQphjl2L424qtHCONh7/AAxe63LIt05TmdeveNL3nE1PyfyEo7uPIi0sEGJ0GJc4bkO4MB6O4QVIKlJzyOY2pINMW9xO3lp09YOpTjUWUgUnAeFjx2hP2h7++nv6zeepdADtaXkG7hY7XdoDEC4Qw9FY1eCb4RadXVTqjaCCdnfoNK+rUpyqRfe9Z2VGMkk/Aj2vBmHLZOZnQbYGpLJ1m18O6rVPyFRFHnilzUi4yfc/2Bq3hF5olXjClhvstMu7W8SJAQGwvhnEfsjPIZJUB3arQxCvQhoQeSJOjCTzZMVYLQ5YU2JcMG2AABjhFjiVrfvZ63Ht464r2t2vbZ/qI6UdHR8AbH0e4Sjvtvs2gJcbUFoV65eORBzH8dMPFbprJv8A4U7CATv+G7LiJxp28wRJWyCls8K4jVBOZ/dUKDQvq1BNU3rOypRl3sEHRxg//Rh9qe/vo39WuvV/w59PA6ZwDhOOrWbsrJP/ACOuLH/pRqssUun/ALHVbw8g602zFYQxGabZZbGSG20hKUjvADZSFSpOpLSm82HjFJZIrU3A+GJcp6VItSVvPOKccV64dGaicycgvLjNORxW6ilFS7l+wP6am3mxxGGLExa3bW3bGvWbjnCqbWpav28gMwokkHIdwihyxO5dRVNLvRdW9PR0cgZHwNhqK+HkW7hFA5hLzqloHinYfnzolTGLqUcs8jkbSmnmH1HM5msltt5sbSyPK4QKYY5di+NuKrRwjjYe/wAMXutyxzEVtfjT3nw2pTDqisLAzAJ2kH56LitlUp1pVEv0vvzK21aMoKOfegPWSNCBqEHUKruZweQsd+rKSKtDyVVZNFWh1K67mVHEr6a7mcyOwvpqyZzI916mZDkr6a5mTI4UuuZnchpSq42WSGVLHfqjkjqQytQ79czRbIZUc64WOa4dFUIWLCltfM1Mx1CkNNg6pUMtYkZfRtNb+DWVTte2msktQjd1o6OgtZbzXqDMOaqQVQh73KstRBdyuMh5XCHtcIKukFUOCqEFUOiqEFUIIV1HRV04eVUgqhBV06dCp4EP/9k="
        />
        <div className={styles.searchbarcontainer}>
          <form className={styles.searchbarinner}>
            <input
              className={styles.searchtext}
              type="text"
              placeholder="Find Movies, TV shows, Celebrities and more..."
            />
            <select className={styles.searchdropdown}>
              <option>All</option>
              <option>Titles</option>
              <option>TV Episodes</option>
              <option>Names</option>
              <option>Companies</option>
              <option>Keywords</option>
              <option>Advanced Search »</option>
            </select>
            <button className={styles.searchbutton} />
          </form>
          <div className={styles.megamenu}>
            <ul className={styles.mainnav}>
              <li className={styles.spacermain} />
              <li className={styles.meganavtitle}>
                <p className={styles.meganavcategory}>
                  <a>Movies, </a>
                  <a>TV</a>
                  <br />
                  &amp; <a>Showtimes</a>
                </p>
                <div className={styles.dropdowncontent}>
                  <ul className={styles.ddmovies}>
                    <li className={styles.ddheader}>MOVIES</li>
                    <li className={styles.ddoptions}>In Theaters</li>
                    <li className={styles.ddoptions}>Showtimes & Tickets</li>
                    <li className={styles.ddoptions}>Latest Trailers</li>
                    <li className={styles.ddoptions}>Coming Soon</li>
                    <li className={styles.ddoptions}>Release Calendar</li>
                    <li className={styles.ddoptions}>Top Rated Movies</li>
                    <li className={styles.ddoptions}>
                      Top Rated Indian Movies
                    </li>
                    <li className={styles.ddoptions}>Most Popular Movies</li>
                    <li className={styles.ddheader}>CHARTS & TRENDS</li>
                    <li className={styles.ddoptions}>Box Office</li>
                    <li className={styles.ddoptions}>Oscar Winners</li>
                    <li className={styles.ddoptions}>Most Popular By Genre</li>
                  </ul>
                  <ul className={styles.ddtvvideo}>
                    <li className={styles.ddheader}>TV & VIDEO</li>
                    <li className={styles.ddoptions}>IMDb TV</li>
                    <li className={styles.ddoptions}>Top Rated TV Shows</li>
                    <li className={styles.ddoptions}>Most Popular TV Shows</li>
                    <li className={styles.ddoptions}>DVD & Blu-Ray</li>
                    <li className={styles.ddheader}>SPECIAL FEATURES</li>
                    <li className={styles.ddoptions}>Amazon Originals</li>
                    <li className={styles.ddoptions}>Summer Movie Guide</li>
                    <li className={styles.ddoptions}>Horror Guide</li>
                    <li className={styles.ddoptions}>IMDb Picks</li>
                    <li className={styles.ddoptions}>Family</li>
                    <li className={styles.ddoptions}>Video Games</li>
                    <li className={styles.ddoptions}>Marvel</li>
                  </ul>
                </div>
              </li>
              <li className={styles.spacermain} />
              <li className={styles.meganavtitle}>
                <p className={styles.meganavcategory}>
                  <a>Celebs, </a>
                  <a>Events</a>
                  <br />
                  &amp; <a>Photos</a>
                </p>
                <div className={styles.dropdowncontent}>
                  <ul className={styles.ddcelebs}>
                    <li className={styles.ddheader}>CELEBS</li>
                    <li className={styles.ddoptions}>Born Today</li>
                    <li className={styles.ddoptions}>Celebrity News</li>
                    <li className={styles.ddoptions}>Most Popular Celebs</li>
                    <li className={styles.ddheader}>PHOTOS</li>
                    <li className={styles.ddoptions}>Latest Stills</li>
                    <li className={styles.ddoptions}>Latest Posters</li>
                    <li className={styles.ddoptions}>Photos We Love</li>
                  </ul>
                  <ul className={styles.ddevents}>
                    <li className={styles.ddheader}>EVENTS</li>
                    <li className={styles.ddoptions}>Awards Central</li>
                    <li className={styles.ddoptions}>Festival Central</li>
                    <li className={styles.ddoptions}>Oscars</li>
                    <li className={styles.ddoptions}>Golden Globes</li>
                    <li className={styles.ddoptions}>Sundance</li>
                    <li className={styles.ddoptions}>Cannes</li>
                    <li className={styles.ddoptions}>Comic-Con</li>
                    <li className={styles.ddoptions}>Emmy Awards</li>
                    <li className={styles.ddoptions}>Venice Film Festival</li>
                    <li className={styles.ddoptions}>Toronto Film Festival</li>
                    <li className={styles.ddoptions}>Tribeca</li>
                    <li className={styles.ddoptions}>SXSW</li>
                    <li className={styles.ddoptions}>All Events</li>
                  </ul>
                </div>
              </li>
              <li className={styles.spacermain} />
              <li className={styles.meganavtitle}>
                <p className={styles.meganavcategory}>
                  <a>News </a>
                  &amp;
                  <br />
                  <a>Community</a>
                </p>
                <div className={styles.dropdowncontent}>
                  <ul className={styles.ddnews}>
                    <li className={styles.ddheader}>NEWS</li>
                    <li className={styles.ddoptions}>Top News</li>
                    <li className={styles.ddoptions}>Movie News</li>
                    <li className={styles.ddoptions}>TV News</li>
                    <li className={styles.ddoptions}>Celebrity News</li>
                    <li className={styles.ddoptions}>Indie News</li>
                    <li className={styles.ddheader}>COMMUNITY</li>
                    <li className={styles.ddoptions}>Contributor Zone</li>
                    <li className={styles.ddoptions}>Polls</li>
                  </ul>
                </div>
              </li>
              <li className={styles.spacermain} />
              <li className={styles.meganavtitle}>
                <p className={styles.meganavcategory}>
                  <a>Watchlist</a>
                </p>
                <div className={styles.dropdowncontent}>
                  <ul className={styles.ddwatchlist}>
                    <li className={styles.ddheader}>YOUR WATCHLIST</li>
                    <ul className={styles.ddwatchimg} >
                      <li className={styles.ddoptions}>
                        <img src="https://m.media-amazon.com/images/G/01/imdb/images/navbar/watchlist_slot1_logged_out-1670046337._CB470041656_.jpg" />
                      </li>
                      <li className={styles.ddoptions}>
                        <img src="https://m.media-amazon.com/images/G/01/imdb/images/navbar/watchlist_slot2_popular-4090757197._CB470041610_.jpg" />
                      </li>
                      <li className={styles.ddoptions}>
                        <img src="https://m.media-amazon.com/images/G/01/imdb/images/navbar/watchlist_slot3_top250-575799966._CB470041651_.jpg" />
                      </li>
                    </ul>
                  </ul>
                </div>
              </li>
              <li className={styles.spacermain} />
            </ul>
          </div>
        </div>
        <div className={styles.navextra}>
          <ul className={styles.navextralist}>
            <li className={styles.navextraitem}>
              <img
                className={styles.imdbpro}
                src="https://m.media-amazon.com/images/G/01/imdb/images/navbar/imdbpro_logo_nb-3000473826._CB470041611_.png"
              />
            </li>
            <li className={styles.spacerextra} />
            <li className={styles.navextrahelp}>
              <a>Help</a>
            </li>
            <li className={styles.social}>
              <img
                className={styles.sociallogo}
                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-facebook-5.png&r=255&g=255&b=255"
              />
              <img
                className={styles.sociallogo}
                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2012/png/iconmonstr-twitter-5.png&r=255&g=255&b=255"
              />
              <img
                className={styles.sociallogo}
                src="https://iconmonstr.com/wp-content/g/gd/makefg.php?i=../assets/preview/2016/png/iconmonstr-instagram-15.png&r=255&g=255&b=255"
              />
            </li>
          </ul>

          <ul className={styles.personallist}>
            <li className={styles.personalitem}>
              <img
                className={styles.personallogo}
                src="https://www.freeiconspng.com/uploads/facebook-sign-in-button-png-26.png"
              />
            </li>
            <li className={styles.personalother}>
              <a>Other Sign in options</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
