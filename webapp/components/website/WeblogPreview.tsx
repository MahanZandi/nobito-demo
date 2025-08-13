type WeblogCategory =
  | "skin-and-hair"
  | "mental-health"
  | "sexual-health"
  | "mother-and-child"
  | "nutrition-and-diet"
  | "latest";

interface WeblogPreviewProps {
  title: string;
  description: string;
  spendTime: number;
  view: number;
  image: string;
  slug: string;
  category: WeblogCategory;
  author: string;
}

const WeblogPreview:React.FC<WeblogPreviewProps> = ({ title, description, spendTime, view, image, slug, category, author }) => {
  return (
    <div className="flex flex-col  bg-white-100">
      <div>{category}</div>
    </div>
  );
};

export default WeblogPreview;
