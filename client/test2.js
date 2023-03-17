<div>
<label>Author: </label>
<input
  style={{ marginLeft: "86px", width: "400px" }}
  type="text"
  onChange={(event) => {
    setAuthor(event.target.value);
  }}
  placeholder="Author Name"
/>
<div>
  Title:{""}
  <input
    style={{ marginLeft: "105px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setTitle(event.target.value);
    }}
    placeholder="Title"
  />
</div>
<div>
  Publisher:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setPublisher(event.target.value);
    }}
    placeholder="Publisher"
  />
  &nbsp;
</div>
<div>
  Volume:{}
  <input
    type="number"
    style={{ marginLeft: "83px", width: "400px" }}
    onChange={(event) => {
      setVolume(event.target.value);
    }}
    placeholder="Volume no."
  />
  &nbsp;
</div>
<div>
  Year :{}
  <input
    type="number"
    style={{ marginLeft: "100px", width: "400px" }}
    onChange={(event) => {
      setYear(event.target.value);
    }}
    placeholder="Year"
  />
  &nbsp;
</div>
<br />
<br />
</div>
<button
class="add-submit"
style={{ marginLeft: "170px" }}
type="submit"
onClick={addArticle}
>
Submit
</button>
&nbsp;
<button className="b1" type="submit">
Cancel
</button>
</form>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
);
}