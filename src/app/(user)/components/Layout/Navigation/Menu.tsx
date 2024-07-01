import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import classNames from 'classnames';
import { useParams, usePathname, useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';
import { useEffect, useRef } from 'react';
import useCategories from '@module/hooks/common/useCategories';
import { contentInfoAtom } from '@module/store/content/info';

import 'swiper/css';
import 'swiper/css/free-mode';

function NavigationMenu() {
  const ref = useRef<any>();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const categoryId = Number(params.categoryId || 0);
  const categories = useCategories() || [];
  const contentInfo = useRecoilValue(contentInfoAtom);

  const checkActiveMenu = (id: number) =>
    id === categoryId || id === contentInfo?.category_id;

  useEffect(() => {
    const index = categories.findIndex(c => c.id === categoryId);
    ref.current.slideTo(index, 500, false);
  }, [pathname]);

  const handleClickLink = (e: React.MouseEvent<HTMLElement>, id: number) => {
    e.preventDefault();

    if (id === 10) {
      router.push('/contents/6');
    } else {
      router.push(`/categories/${id}`);
    }
  };

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={0}
      freeMode
      modules={[FreeMode]}
      onInit={swiper => {
        ref.current = swiper;
        const index = categories.findIndex(c => c.id === categoryId) + 1;
        swiper.slideTo(index, 500, false);
      }}
    >
      {categories.map(c => (
        <SwiperSlide
          key={c.id}
          className={classNames({
            active: checkActiveMenu(c.id),
          })}
        >
          <Link
            href={`/categories/${c.id}`}
            onClick={e => {
              handleClickLink(e, c.id);
            }}
            prefetch={false}
          >
            {c.name}
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default NavigationMenu;
