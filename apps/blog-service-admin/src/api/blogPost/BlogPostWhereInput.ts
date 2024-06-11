import { AuthorWhereUniqueInput } from "../author/AuthorWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type BlogPostWhereInput = {
  author?: AuthorWhereUniqueInput;
  content?: StringNullableFilter;
  id?: StringFilter;
  publishedAt?: DateTimeNullableFilter;
  title?: StringNullableFilter;
};
