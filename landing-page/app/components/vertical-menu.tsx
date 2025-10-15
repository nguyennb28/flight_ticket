const VerticalMenu = () => {
  return (
    <>
      <ul className="space-y-1">
        <li>
          <a
            href="#vietnamese"
            className="block rounded-lg bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          >
            Tổng quan
          </a>
        </li>

        <li>
          <a
            href="#vietnamese-section-two"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Billing
          </a>
        </li>

        <li>
          <a
            href="#vietnamese-section-three"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Invoices
          </a>
        </li>

        <li>
          <a
            href="#vietnamese-section-four"
            className="block rounded-lg px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-200"
          >
            Invoices
          </a>
        </li>
      </ul>
    </>
  );
};

export default VerticalMenu;
