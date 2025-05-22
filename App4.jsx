function Item({ name, isPacked }) {
  return (
    <li className="item">
      {isPacked ? (
        <del>
          {name + ' right'}
        </del>
      ) : (
        name
      )}
    </li>
  );
}

export default function PackingList(){
    return (
        <section>
            <h1>Vinamra Nivedan</h1>
            <ul>
                <Item isPacked={true} name="Space suit"/>
                <Item isPacked={true} name="Helmet with a golden leaf"/>
                <Item isPacked={false} name="Photo of Tom"/>
            </ul>
        </section>
    )
}