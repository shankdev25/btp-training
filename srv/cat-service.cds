using trainer as db from '../db/data-model';

@path: 'wednesday'
service CatalogService {
    entity trainers as projection on db.training;
}
