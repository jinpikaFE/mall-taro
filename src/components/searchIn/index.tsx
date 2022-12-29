import { AtSearchBar } from 'taro-ui';

const SearchIn: React.FC<{
  searchVal: string;
  setSearchVal: React.Dispatch<React.SetStateAction<string>>;
}> = ({ searchVal, setSearchVal }) => {
  return (
    <>
      <AtSearchBar
        value={searchVal}
        onChange={(val) => {
          setSearchVal(val);
        }}
      />
    </>
  );
};

export default SearchIn;
