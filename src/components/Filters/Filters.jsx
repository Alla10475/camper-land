import { useState } from "react";
import Button from "../Button/Button";
import css from "./Filters.module.css";
import sprite from "../../assets/icons.svg";
import FilterCard from "../FilterCard/FilterCard";

// const equipment = ["AC", "automatic", "kitchen", "TV", "shower"];
// const type = ["panelTruck", "fullyIntegrated", "alcove"];

const Filters = ({ onSubmit }) => {
  const [query, setQuery] = useState(" ");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      alert("Please fill in the search field.");
      return;
    }
    onSubmit(query);
    setQuery("");
  };

  return (
    <form className={css.searchForm} onSubmit={handelSubmit}>
      <label className={css.label}>Location</label>
      <input
        className={css.input}
        type="text"
        placeholder="City"
        name="query"
        value={query}
        onChange={handleChange}
      />
      <svg className={css.locationIcon} width={18} height={20}>
        <use href={`${sprite}#icon-location`} />
      </svg>
      <p className={css.text}>Filters</p>
      <div className={css.filterPanel}>
        <div>
          <p className={css.filterType}>Vehicle equipment</p>
          <div className={css.variantWrap}>
            <FilterCard
              href={sprite}
              text="AC"
              name="icon-AC"
              width={32}
              height={33}
              left="40px"
              right="40px"
            />
            <FilterCard
              href={sprite}
              text="Automatic"
              name="icon-automatic"
              width={33}
              height={33}
              left="18px"
              right="18px"
            />
            <FilterCard
              href={sprite}
              text="Kitchen"
              name="icon-kitchen"
              width={33}
              height={33}
              left="26px"
              right="26px"
            />
            <FilterCard
              href={sprite}
              text="TV"
              name="icon-tv"
              width={32}
              height={33}
              left="40px"
              right="40px"
            />
            <FilterCard
              href={sprite}
              text="Shower/WC"
              name="icon-shower"
              width={32}
              height={33}
              left="12px"
              right="12px"
            />
          </div>
        </div>

        <div>
          <p className={css.filterType}>Vehicle type</p>
          <div className={css.variantWrap}>
            <FilterCard
              href={sprite}
              text="Van"
              name="icon-van"
              width={40}
              height={28}
              left="30px"
              right="30px"
            />
            <FilterCard
              href={sprite}
                text="Fully Integrated"
              name="icon-fully-integ"
              width={40}
              height={29}
              left="24px"
              right="24px"
            />
            <FilterCard
              href={sprite}
              text="Alcove"
              name="icon-alcove"
              width={40}
              height={29}
              left="30px"
              right="30px"
            />
          </div>
        </div>
      </div>

      <Button type="button" variant="send">
        Send
      </Button>
    </form>
  );
};

export default Filters;
