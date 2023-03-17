<div>
<label>Employee Id: </label>
<input
  style={{ marginLeft: "86px", width: "400px" }}
  type="text"
  onChange={(event) => {
    setEmp_Id(event.target.value);
  }}
  placeholder="Employee ID"
/>
<div>
  Title of Journal:{""}
  <input
    style={{ marginLeft: "105px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setTitle_Of_Paper(event.target.value);
    }}
    placeholder="Title"
  />
</div>
<div>
  Author Names:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setAuthor_Names(event.target.value);
    }}
    placeholder="Author_Names"
  />
  &nbsp;
</div>
<div>
  Journal Name:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setJournal_Name(event.target.value);
    }}
    placeholder="Journal Name"
  />
  &nbsp;
</div>
<div>
  Issn_No:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setIssn_No(event.target.value);
    }}
    placeholder="Issn Number"
  />
  <div>
  Date of Publication:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setDop(event.target.value);
    }}
    placeholder="Date of Publication"
  />
  &nbsp;
</div>
<div>
  Page Number:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setPage_No(event.target.value);
    }}
    placeholder="Page Numbers"
  />
  &nbsp;
</div>
<div>
  Volume Number:{}
  <input
    type="number"
    style={{ marginLeft: "83px", width: "400px" }}
    onChange={(event) => {
      setVolume_No(event.target.value);
    }}
    placeholder="Volume no."
  />
  &nbsp;
</div>
<div>
  International Issue Number:{}
  <input
    type="number"
    style={{ marginLeft: "83px", width: "400px" }}
    onChange={(event) => {
      setInt_Issue_Num(event.target.value);
    }}
    placeholder="International Issue Number"
  />
  &nbsp;
</div>
<div>
 Scopus Snip Number:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setScopus_Snip_Num(event.target.value);
    }}
    placeholder="Scopus Snip Number"
  />
  &nbsp;
</div>
<div>
  UGC List Number:{""}
  <input
    style={{ marginLeft: "75px", width: "400px" }}
    type="text"
    onChange={(event) => {
      setUgc_List_Num(event.target.value);
    }}
    placeholder="UGC List Number"
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
onClick={addInternationalJournal}
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